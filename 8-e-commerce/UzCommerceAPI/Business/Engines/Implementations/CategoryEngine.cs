using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using UzCommerce.Business.Engines.Interfaces;
using UzCommerce.Business.Engines.Models;
using UzCommerce.Business.Engines.Models.Category;
using UzCommerce.Data.DAL.UnitOfWork;
using UzCommerce.Data.Entities;

namespace UzCommerce.Business.Engines.Implementations
{
    public class CategoryEngine : ICategoryEngine
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        public CategoryEngine(
            IUnitOfWork unitOfWork,
            IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public List<CategoryModel> GetAllCategories()
        {
            var _categoryRepository = _unitOfWork.GetRepository<CategoryEntity>();
            var data = _categoryRepository.Get(q => !q.Deleted).Select(category => _mapper.Map<CategoryModel>(category)).ToList();
            return data;
        }

        public CategoryModel GetCategoryById(int categoryId)
        {
            var _categoryRepository = _unitOfWork.GetRepository<CategoryEntity>();
            var data = _categoryRepository.Get(q => q.Id == categoryId && !q.Deleted).Select(category => _mapper.Map<CategoryModel>(category)).FirstOrDefault();
            return data;
        }

        public EngineResponseModel<int> DeleteCategory(int categoryId)
        {
            var response = new EngineResponseModel<int>();
            try
            {
                var _categoryRepository = _unitOfWork.GetRepository<CategoryEntity>();
                var category = _categoryRepository.Get(q => q.Id == categoryId).FirstOrDefault();
                category.Deleted = true;
                _unitOfWork.SaveChanges();
                response.IsSuccess = true;
                response.Message = "Operation is Successfull";
            }
            catch (Exception)
            {
                response.IsSuccess = false;
                response.Errors.Add("An error ocurred when trying to delete a cagory : " + categoryId);
            }
            return response;
        }

        public EngineResponseModel<int> UpdateCategory(int categoryId , CategoryInsertModel model)
        {
            var response = new EngineResponseModel<int>();
            try
            {
                var _categoryRepository = _unitOfWork.GetRepository<CategoryEntity>();
                var category = _categoryRepository.Get(q => q.Id == categoryId).FirstOrDefault();
                category.Name = model.Name;
                category.Description = model.Description;
                _unitOfWork.SaveChanges();
                response.IsSuccess = true;
                response.Message = "Operation is Successfull";
            }
            catch (Exception)
            {
                response.IsSuccess = false;
                response.Errors.Add("An error ocurred when trying to update a cagory : " + categoryId);
            }
            return response;
        }

        public EngineResponseModel<CategoryModel> CreateCategory(CategoryInsertModel model)
        {
            var response = new EngineResponseModel<CategoryModel>();
            try
            {
                var _categoryRepository = _unitOfWork.GetRepository<CategoryEntity>();
                var category = new CategoryEntity
                {
                    Name = model.Name,
                    Description = model.Description
                };
                _categoryRepository.Add(category);
                _unitOfWork.SaveChanges();
                response.Data = GetCategoryById(category.Id);
                response.IsSuccess = true;
                response.Message = "Operation is Successfull";
            }
            catch (Exception)
            {
                response.IsSuccess = false;
                response.Errors.Add("An error ocurred when trying to create a new category!");
            }
            return response;
        }
    }
}
