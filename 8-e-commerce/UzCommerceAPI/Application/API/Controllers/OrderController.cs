using IZCommerce.CatalogService.APP.API;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using UzCommerce.Business.Engines.Interfaces;
using UzCommerce.Business.Engines.Models.Cart;
using UzCommerce.Business.Engines.Models.Order;

namespace UzCommerce.Application.API.Controllers
{
    public class OrderController : BaseController
    {
        private readonly IOrderEngine _orderEngine;
        public OrderController(IOrderEngine orderEngine)
        {
            _orderEngine = orderEngine;
        }

        [HttpGet]
        public ApiResponseModel<List<OrderSummaryModel>> Get()
        {
            var response = new ApiResponseModel<List<OrderSummaryModel>>();
            var engineResponse = _orderEngine.GetAllOrders();
            response.Data = engineResponse.Data;
            response.IsSuccess = engineResponse.IsSuccess;
            response.Errors = engineResponse.Errors;
            response.Message = engineResponse.Message;
            return ApiResponse(response);
        }

        [HttpGet("{orderId}")]
        public ApiResponseModel Get(int orderId)
        {
            var response = new ApiResponseModel();
            var engineResponse = _orderEngine.GetOrderSummary(orderId);
            response.Data = engineResponse.Data;
            response.IsSuccess = engineResponse.IsSuccess;
            response.Errors = engineResponse.Errors;
            response.Message = engineResponse.Message;
            return ApiResponse(response);
        }

        [HttpPost]
        public ApiResponseModel<OrderCompletedModel> Post(OrderCreateModel model)
        {
            var response = new ApiResponseModel<OrderCompletedModel>();
            var engineResponse = _orderEngine.CreateOrder(model);
            response.Data = engineResponse.Data;
            response.IsSuccess = engineResponse.IsSuccess;
            response.Errors = engineResponse.Errors;
            response.Message = engineResponse.Message;
            return ApiResponse(response);
        }
    }
}
