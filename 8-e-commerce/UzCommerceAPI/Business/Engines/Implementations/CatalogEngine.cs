using AutoMapper;
using UzCommerce.Business.Engines.Interfaces;
using UzCommerce.Business.Engines.Models.Product;
using UzCommerce.Data.DAL.UnitOfWork;
using UzCommerce.Data.Entities;
using System.Collections.Generic;
using System.Linq;
using UzCommerce.Business.Engines.Models.Common;
using UzCommerce.Business.Engines.Models.Category;

namespace UzCommerce.Business.Engines.Implementations
{
    public class CatalogEngine : ICatalogEngine
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        public CatalogEngine(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public List<ProductOverViewModel> GetProductListForCatalog(CatalogFilterModel catalogFilterModel)
        {
            var productRepository = _unitOfWork.GetRepository<ProductEntity>();
            var productQuery = productRepository.Get(q => q.CategoryId == catalogFilterModel.CategoryId);
            productQuery =  SortProductsBasedOnOrderByParameter(productQuery, catalogFilterModel);
            var products = productQuery.Select(product => _mapper.Map<ProductOverViewModel>(product)).ToList();
            return products;
        }

        public List<ProductOverViewModel> GetNewProducts()
        {
            var productRepository = _unitOfWork.GetRepository<ProductEntity>();
            var productQuery = productRepository.Get().OrderBy(q=> q.Id).Take(5);
            var products = productQuery.Select(product => _mapper.Map<ProductOverViewModel>(product)).ToList();
            return products;
        }

        public List<CategoryModel> GetCategoryList()
        {
            var categoryRepository = _unitOfWork.GetRepository<CategoryEntity>();
            var categoryQuery = categoryRepository.Get(q => !q.Deleted);
            var categories = categoryQuery.Select(product => _mapper.Map<CategoryModel>(product)).ToList();
            return categories;
        }

        private IQueryable<ProductEntity> SortProductsBasedOnOrderByParameter(IQueryable<ProductEntity> productQuery, CatalogFilterModel catalogFilterModel)
        {
            switch (catalogFilterModel.OrderByType)
            {
                case OrderByTypes.PriceAsc:
                    productQuery = productQuery.OrderBy(q => q.Price);
                    break;
                case OrderByTypes.PriceDesc:
                    productQuery = productQuery.OrderByDescending(q => q.Price);
                    break;
                case OrderByTypes.NameAsc:
                    productQuery = productQuery.OrderBy(q => q.Name);
                    break;
                case OrderByTypes.NameDesc:
                    productQuery = productQuery.OrderByDescending(q => q.Name);
                    break;
                default:
                    productQuery = productQuery.OrderBy(q => q.Price);
                    break;
            }
            return productQuery;
        }
    }
}
