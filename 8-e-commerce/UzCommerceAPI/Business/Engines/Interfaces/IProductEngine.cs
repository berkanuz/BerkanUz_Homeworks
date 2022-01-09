using UzCommerce.Business.Engines.Models.Product;
using System.Collections.Generic;
using UzCommerce.Data.Entities;
using UzCommerce.Business.Engines.Models;
using UzCommerce.Business.Engines.Models.Category;

namespace UzCommerce.Business.Engines.Interfaces
{
    public interface IProductEngine : IEngineBase
    {
        EngineResponseModel<ProductModel> CreateProduct(ProductCreateModel model);
        List<ProductModel> GetProductList();
        EngineResponseModel<int> DeleteProduct(int productId);
        ProductModel GetProductById(int productId);
        EngineResponseModel<int> UpdateProduct(int productId, ProductCreateModel model);
    }
}
