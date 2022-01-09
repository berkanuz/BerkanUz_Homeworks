using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UzCommerce.Business.Engines.Models.Common
{
    public class CatalogFilterModel
    {
        public CatalogFilterModel()
        {
            OrderByType = OrderByTypes.PriceAsc;
        }
        public int CategoryId { get; set; }
        public OrderByTypes OrderByType { get; set; }
    }
}
