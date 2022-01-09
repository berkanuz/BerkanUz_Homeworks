using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using UzCommerce.Business.Engines.Interfaces;
using UzCommerce.Business.Engines.Models;
using UzCommerce.Business.Engines.Models.Category;
using UzCommerce.Business.Engines.Models.Product;
using UzCommerce.Data.DAL.UnitOfWork;
using UzCommerce.Data.Entities;

namespace IZCommerce.CatalogService.Business.Engines
{
    public class ProductEngine : IProductEngine
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        public ProductEngine(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }
        public List<ProductModel> GetProductList()
        {
            var productRepository = _unitOfWork.GetRepository<ProductEntity>();
            var products = productRepository.Get(q=> !q.Deleted)
                .Select(product => _mapper.Map<ProductModel>(product)).ToList();
            return products;
        }
        public EngineResponseModel<ProductModel> CreateProduct(ProductCreateModel model)
        {
            var response = new EngineResponseModel<ProductModel>();
            try
            {
                var product = new ProductEntity
                {
                    Name = model.Name ,
                    Price = model.Price,
                    CategoryId = model.CategoryId,
                    PictureUrl = model.PictureUrl
                };
                var productRepository = _unitOfWork.GetRepository<ProductEntity>();
                productRepository.Add(product);
                _unitOfWork.SaveChanges();
                response.Data = GetProductById(product.Id);
                response.IsSuccess = true;
                response.Message = string.Format("Product {0} successfully created", product.Name);
            }
            catch (Exception ex)
            {
                response.IsSuccess = false;
                response.Errors.Add(ex.Message);
            }
            return response;
        }
        public EngineResponseModel<int> DeleteProduct(int productId)
        {
            var response = new EngineResponseModel<int>();
            try
            {
                var _productRepository = _unitOfWork.GetRepository<ProductEntity>();
                var product = _productRepository.Get(q => q.Id == productId).FirstOrDefault();
                product.Deleted = true;
                _unitOfWork.SaveChanges();
                response.IsSuccess = true;
                response.Message = "Operation is Successfull";
            }
            catch (Exception)
            {
                response.IsSuccess = false;
                response.Errors.Add("An error ocurred when trying to delete a product : " + productId);
            }
            return response;
        }
        public ProductModel GetProductById(int productId)
        {
            var _productRepository = _unitOfWork.GetRepository<ProductEntity>();
            var data = _productRepository.Get(q => q.Id == productId && !q.Deleted).Select(product => _mapper.Map<ProductModel>(product)).FirstOrDefault();
            return data;
        }

        public EngineResponseModel<int> UpdateProduct(int productId, ProductCreateModel model)
        {
            var response = new EngineResponseModel<int>();
            try
            {
                var _categoryRepository = _unitOfWork.GetRepository<CategoryEntity>();
                var category = _categoryRepository.GetById(model.CategoryId);
                if (category == null)
                {
                    response.IsSuccess = false;
                    response.ValidationErrors.Add("CategoryId", new string[] { "Valid Category Required" });
                    return response;
                }
                var _productRepository = _unitOfWork.GetRepository<ProductEntity>();
                var product = _productRepository.GetById(productId);
                product.Name = model.Name;
                product.Price = model.Price;
                product.PictureUrl = model.PictureUrl;
                product.CategoryId = model.CategoryId;
                _unitOfWork.SaveChanges();
                response.IsSuccess = true;
                response.Message = "Operation is Successfull";
            }
            catch (Exception)
            {
                response.IsSuccess = false;
                response.Errors.Add("An error ocurred when trying to update a product : " + productId);
            }
            return response;
        }
    }
}
