using IZCommerce.CatalogService.APP.API;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UzCommerce.Business.Engines.Interfaces;
using UzCommerce.Business.Engines.Models.Category;
using UzCommerce.Business.Engines.Models.Common;
using UzCommerce.Business.Engines.Models.Product;

namespace UzCommerce.Application.API.Controllers
{
    public class CatalogController : BaseController
    {
        private readonly ICatalogEngine _catalogEngine;
        public CatalogController(ICatalogEngine catalogEngine)
        {
            _catalogEngine = catalogEngine;
        }
        [HttpGet("products")]
        public ApiResponseModel<List<ProductOverViewModel>> GetProducts([FromQuery]CatalogFilterModel catalogFilterModel)
        {
            var response = new ApiResponseModel<List<ProductOverViewModel>>();
            var data = _catalogEngine.GetProductListForCatalog(catalogFilterModel);
            response.Data = data;
            return ApiResponse(response);
        }

        [HttpGet("newproducts")]
        public ApiResponseModel<List<ProductOverViewModel>> GetNewProducts()
        {
            var response = new ApiResponseModel<List<ProductOverViewModel>>();
            var data = _catalogEngine.GetNewProducts();
            response.Data = data;
            return ApiResponse(response);
        }


        [HttpGet("categories")]
        public ApiResponseModel<List<CategoryModel>> GetCategories()
        {
            var response = new ApiResponseModel<List<CategoryModel>>();
            var data = _catalogEngine.GetCategoryList();
            response.Data = data;
            return ApiResponse(response);
        }
    }
}
