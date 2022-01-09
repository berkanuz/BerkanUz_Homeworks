using System.Collections.Generic;

namespace UzCommerce.Business.Engines.Models.Cart
{
    public class CartModel
    {
        public string TotalText { get; set; }
        public List<CartItemModel> CartItems { get; set; }
    }
}
