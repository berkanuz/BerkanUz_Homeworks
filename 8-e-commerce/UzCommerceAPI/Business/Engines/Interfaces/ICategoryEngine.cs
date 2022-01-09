using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UzCommerce.Business.Engines.Models;
using UzCommerce.Business.Engines.Models.Category;

namespace UzCommerce.Business.Engines.Interfaces
{
    public interface ICategoryEngine : IEngineBase
    {
        List<CategoryModel> GetAllCategories();
        CategoryModel GetCategoryById(int categoryId);
        EngineResponseModel<int> DeleteCategory(int categoryId);
        EngineResponseModel<int> UpdateCategory(int categoryId, CategoryInsertModel model);
        EngineResponseModel<CategoryModel> CreateCategory(CategoryInsertModel model);

    }
}
