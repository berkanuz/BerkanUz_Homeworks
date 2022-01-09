using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UzCommerce.Business.Engines.Models.Product
{
    public class ProductCatalogModel
    {
        public List<ProductOverViewModel> Products { get; set; }
        public int TotalPages { get; set; }
    }
}
