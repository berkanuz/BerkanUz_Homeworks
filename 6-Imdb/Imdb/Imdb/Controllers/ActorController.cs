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
    public class ActorsController : ControllerBase
    {
        private readonly ApplicationDbContext _dbContext;

        public ActorsController(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        public IActionResult GetActor()
        {
            var actor = _dbContext.Actors.ToList();

            return Ok(actor);
        }

        [HttpPost]
        public IActionResult AddActor([FromBody] Actor actor)
        {
            _dbContext.Actors.Add(actor);
            _dbContext.SaveChanges();
            return Ok();
        }


        [HttpPut]
        public IActionResult UpdateActor([FromBody] Actor actor)
        {
            _dbContext.Actors.Update(actor);
            _dbContext.SaveChanges();
            return Ok();
        }

        [HttpDelete]
        public IActionResult RemoveActor([FromBody] Actor actor)
        {
            _dbContext.Actors.Remove(actor);
            _dbContext.SaveChanges();
            return Ok();
        }
    }
}
