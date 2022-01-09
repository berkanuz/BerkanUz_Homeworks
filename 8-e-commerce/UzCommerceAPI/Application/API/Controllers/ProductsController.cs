using UzCommerce.Business.Engines.Interfaces;
using UzCommerce.Business.Engines.Models.Product;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IZCommerce.CatalogService.APP.API;
using UzCommerce.Business.Engines.Models.Category;

namespace UzCommerce.Application.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : BaseController
    {
        private readonly IProductEngine _productEngine;
        public ProductsController(IProductEngine productEngine)
        {
            _productEngine = productEngine;
        }
        [HttpGet]
        public List<ProductModel> Get()
        {
            var data = _productEngine.GetProductList();
            return data;
        }

        [HttpGet("{productId}")]
        public ApiResponseModel<ProductModel> Get(int productId)
        {
            var response = new ApiResponseModel<ProductModel>();
            var data = _productEngine.GetProductById(productId);
            response.Data = data;
            return response;
        }

        [HttpPost]
        public ApiResponseModel<ProductModel> Create(ProductCreateModel model)
        {
            var response = new ApiResponseModel<ProductModel>();
            try
            {
                var engineResponse = _productEngine.CreateProduct(model);
                response.Data = engineResponse.Data;
                response.IsSuccess = engineResponse.IsSuccess;
                response.Message = engineResponse.Message;
                response.Errors = engineResponse.Errors;
            }
            catch (Exception ex)
            {
                response.Errors.Add(ex.Message);
                response.IsSuccess = false;
            }
            return ApiResponse(response);
        }

        [HttpDelete("{productId}")]
        public ApiResponseModel Delete(int productId)
        {
            var response = new ApiResponseModel();
            var engineResponse = _productEngine.DeleteProduct(productId);
            response.IsSuccess = engineResponse.IsSuccess;
            response.Errors = engineResponse.Errors;
            response.Message = engineResponse.Message;
            return response;
        }

        [HttpPut("{productId}")]
        public ApiResponseModel Put(int productId, [FromBody] ProductCreateModel model)
        {
            var response = new ApiResponseModel();
            var engineResponse = _productEngine.UpdateProduct(productId, model);
            response.IsSuccess = engineResponse.IsSuccess;
            response.Errors = engineResponse.Errors;
            response.Message = engineResponse.Message;
            response.ValidationErrors = engineResponse.ValidationErrors;
            return response;
        }
    }
}
