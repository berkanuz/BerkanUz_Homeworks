namespace UzCommerce.Business.Engines.Models.Cart
{
    public class CartItemModel
    {
        public int Id { get; set; }
        public string ProductName { get; set; }
        public string ProductPictureUrl { get; set; }
        public string UnitPriceText { get; set; }
        public string TotalPriceText { get; set; }
        public int Quantity { get; set; }
    }
}
