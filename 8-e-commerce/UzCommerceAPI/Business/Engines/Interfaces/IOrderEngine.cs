using System.Collections.Generic;
using UzCommerce.Business.Engines.Models;
using UzCommerce.Business.Engines.Models.Order;

namespace UzCommerce.Business.Engines.Interfaces
{
    public interface IOrderEngine : IEngineBase
    {
        EngineResponseModel<OrderCompletedModel> CreateOrder(OrderCreateModel model);
        EngineResponseModel<OrderSummaryModel> GetOrderSummary(int orderId);
        EngineResponseModel<List<OrderSummaryModel>> GetAllOrders();
    }
}
