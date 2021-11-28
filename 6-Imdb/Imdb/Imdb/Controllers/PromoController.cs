using Imdb.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Imdb.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NewsController : ControllerBase
    {
        private readonly ApplicationDbContext _dbContext;

        public NewsController(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        public IActionResult GetPromo()
        {
            var news = _dbContext.Actors.ToList();

            return Ok(news);
        }

        [HttpPost]
        public IActionResult AddPromo([FromBody] Promo promo)
        {
            _dbContext.Promos.Add(promo);
            _dbContext.SaveChanges();
            return Ok();
        }


        [HttpPut]
        public IActionResult UpdatePromo([FromBody] Promo promo)
        {
            _dbContext.Promos.Update(promo);
            _dbContext.SaveChanges();
            return Ok();
        }

        [HttpDelete]
        public IActionResult RemovePromo([FromBody] Promo promo)
        {
            _dbContext.Promos.Remove(promo);
            _dbContext.SaveChanges();
            return Ok();
        }

    }
}
