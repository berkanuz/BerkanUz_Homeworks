using System;
using FootballManagerApi.EntityBases;

using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FootballManagerApi.Entities
{
    public class ManagementPosition : IEntity
    {
        public string Name { get; set; }
        public int Id { get; set; }
        public DateTime CreateDate { get; set; }
        public DateTime UpdateDate { get; set; }
    }
}
