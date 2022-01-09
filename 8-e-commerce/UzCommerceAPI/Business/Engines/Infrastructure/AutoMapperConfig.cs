using AutoMapper;
using UzCommerce.Business.Engines.Models;
using UzCommerce.Business.Engines.Models.Cart;
using UzCommerce.Business.Engines.Models.Category;
using UzCommerce.Business.Engines.Models.Product;
using UzCommerce.Data.Entities;

namespace UzCommerce.Business.Engines.Infrastructure
{
    public class AutoMapperConfig : Profile
    {
        public AutoMapperConfig()
        {
            CreateMap<ProductEntity, ProductOverViewModel>();
            CreateMap<ProductEntity, ProductModel>();
            CreateMap<CategoryEntity, CategoryModel>();
        }
    }
}