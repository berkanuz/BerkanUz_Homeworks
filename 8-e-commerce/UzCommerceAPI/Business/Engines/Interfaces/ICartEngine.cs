using UzCommerce.Business.Engines.Models;
using UzCommerce.Business.Engines.Models.Cart;

namespace UzCommerce.Business.Engines.Interfaces
{
    public interface ICartEngine : IEngineBase
    {
        CartModel GetCart();
        EngineResponseModel<string> AddToCart(AddToCartModel model);
        EngineResponseModel<string> DeleteFromCart(int cartId);
    }
}
