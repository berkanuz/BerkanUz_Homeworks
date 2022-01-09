using IZCommerce.CatalogService.APP.API;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using UzCommerce.Business.Engines.Interfaces;
using UzCommerce.Business.Engines.Models.Category;

namespace UzCommerce.Application.API.Controllers
{
    public class CategoriesController : BaseController
    {
        private readonly ICategoryEngine _categoryEngine;
        public CategoriesController(ICategoryEngine categoryEngine)
        {
            _categoryEngine = categoryEngine;
        }

        [HttpGet]
        public ApiResponseModel<List<CategoryModel>> Get()
        {
            var response = new ApiResponseModel<List<CategoryModel>>();
            var data = _categoryEngine.GetAllCategories();
            response.Data = data;
            return response;
        }

        [HttpGet("{categoryId}")]
        public ApiResponseModel<CategoryModel> Get(int categoryId)
        {
            var response = new ApiResponseModel<CategoryModel>();
            var data = _categoryEngine.GetCategoryById(categoryId);
            response.Data = data;
            return response;
        }

        [HttpPost]
        public ApiResponseModel<CategoryModel> Post(CategoryInsertModel model)
        {
            var response = new ApiResponseModel<CategoryModel>();
            var engineResponse = _categoryEngine.CreateCategory(model);
            response.Data = engineResponse.Data;
            response.IsSuccess = engineResponse.IsSuccess;
            response.Errors = engineResponse.Errors;
            response.Message = engineResponse.Message;
            return response;
        }

        [HttpPut("{categoryId}")]
        public ApiResponseModel Put(int categoryId, [FromBody] CategoryInsertModel model)
        {
            var response = new ApiResponseModel();
            var engineResponse = _categoryEngine.UpdateCategory(categoryId, model);
            response.IsSuccess = engineResponse.IsSuccess;
            response.Errors = engineResponse.Errors;
            response.Message = engineResponse.Message;
            return response;
        }

        [HttpDelete("{categoryId}")]
        public ApiResponseModel GetCategoryProducts(int categoryId)
        {
            var response = new ApiResponseModel();
            var engineResponse = _categoryEngine.DeleteCategory(categoryId);
            response.IsSuccess = engineResponse.IsSuccess;
            response.Errors = engineResponse.Errors;
            response.Message = engineResponse.Message;
            return response;
        }
    }
}
