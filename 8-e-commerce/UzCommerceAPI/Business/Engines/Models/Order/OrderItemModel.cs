using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UzCommerce.Business.Engines.Models.Order
{
    public class OrderItemModel
    {
        public string ProductName { get; set; }
        public int Quantity { get; set; }
        public string UnitPriceText { get; set; }
        public string TotalPriceText { get; set; }
    }
}
