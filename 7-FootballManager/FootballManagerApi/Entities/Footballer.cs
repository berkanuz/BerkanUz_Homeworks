using System;
using System.Collections.Generic;
using FootballManagerApi.EntityBases;
using System.Linq;
using System.Threading.Tasks;

namespace FootballManagerApi.Entities
{
    public class Footballer : Person, IEntity
    {
        public ICollection<Position> Positions { get; set; }

        public int Id { get; set; }
        public DateTime CreateDate { get; set; }
        public DateTime UpdateDate { get; set; }
    }
}
