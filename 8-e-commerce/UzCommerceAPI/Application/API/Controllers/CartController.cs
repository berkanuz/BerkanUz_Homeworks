using IZCommerce.CatalogService.APP.API;
using Microsoft.AspNetCore.Mvc;
using UzCommerce.Business.Engines.Interfaces;
using UzCommerce.Business.Engines.Models.Cart;

namespace UzCommerce.Application.API.Controllers
{
    public class CartController : BaseController
    {
        private readonly ICartEngine _cartEngine;
        public CartController(ICartEngine cartEngine)
        {
            _cartEngine = cartEngine;
        }

        [HttpGet]
        public ApiResponseModel<CartModel> Get()
        {
            var response = new ApiResponseModel<CartModel>();
            var data = _cartEngine.GetCart();
            response.Data = data;
            return ApiResponse(response);
        }

        [HttpPost]
        public ApiResponseModel Post(AddToCartModel model)
        {
            var response = new ApiResponseModel();
            var engineResponse = _cartEngine.AddToCart(model);
            response.IsSuccess = engineResponse.IsSuccess;
            response.Errors = engineResponse.Errors;
            response.Message = engineResponse.Message;
            return ApiResponse(response);
        }

        [HttpDelete("{cartId}")]
        public ApiResponseModel Delete(int cartId)
        {
            var response = new ApiResponseModel();
            var engineResponse = _cartEngine.DeleteFromCart(cartId);
            response.IsSuccess = engineResponse.IsSuccess;
            response.Errors = engineResponse.Errors;
            response.Message = engineResponse.Message;
            return ApiResponse(response);
        }
    }
}
