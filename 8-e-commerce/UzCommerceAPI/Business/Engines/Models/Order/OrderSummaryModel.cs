using System.Collections.Generic;

namespace UzCommerce.Business.Engines.Models.Order
{
    public class OrderSummaryModel
    {
        public int OrderId { get; set; }
        public AddressModel AddressModel { get; set; }
        public string PaymentMethod { get; set; }
        public string TotalText { get; set; }
        public string DeliveryDate { get; set; }
        public string CreatedDate { get; set; }
        public List<OrderItemModel> OrderItems {get;set;}
    }
}
