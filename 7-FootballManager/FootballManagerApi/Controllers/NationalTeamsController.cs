using FootballManagerApi.Entities;
using FootballManagerApi.UnitOfWork;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FootballManagerApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NationalTeamsController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;

        public NationalTeamsController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        // GET: api/NationalTeams
        [HttpGet]
        public async Task<ActionResult<IEnumerable<NationalTeam>>> GetNationalTeams()
        {
            return Ok(await _unitOfWork.NationalTeamService.GetAllAsync());
        }

        // GET: api/NationalTeams/5
        [HttpGet("{id}")]
        public async Task<ActionResult<NationalTeam>> GetNationalTeam(int id)
        {
            return await _unitOfWork.NationalTeamService.GetAsync(id);
        }

        // PUT: api/NationalTeams/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutNationalTeam(int id, NationalTeam nationalTeam)
        {
            await _unitOfWork.NationalTeamService.UpdateAsync(id, nationalTeam);
            return NoContent();
        }

        // POST: api/NationalTeams
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<NationalTeam>> PostNationalTeam(NationalTeam nationalTeam)
        {
            await _unitOfWork.NationalTeamService.CreateAsync(nationalTeam);
            return CreatedAtAction("GetNationalTeam", new { id = nationalTeam.Id }, nationalTeam);
        }

        // DELETE: api/NationalTeams/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteNationalTeam(int id)
        {
            await _unitOfWork.NationalTeamService.DeleteAsync(id);
            return NoContent();
        }
    }
}
