using UzCommerce.Business.Engines.Models.Product;
using System.Collections.Generic;
using UzCommerce.Business.Engines.Models.Common;
using UzCommerce.Business.Engines.Models.Category;

namespace UzCommerce.Business.Engines.Interfaces
{
    public interface ICatalogEngine : IEngineBase
    {
        List<ProductOverViewModel> GetProductListForCatalog(CatalogFilterModel catalogFilterModel);
        List<CategoryModel> GetCategoryList();
        List<ProductOverViewModel> GetNewProducts();
    }
}
