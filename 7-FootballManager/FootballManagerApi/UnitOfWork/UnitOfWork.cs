using FootballManagerApi.Data;
using FootballManagerApi.ServiceAbstracts;
using System.Threading.Tasks;

namespace FootballManagerApi.UnitOfWork
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly ApplicationDbContext _dbContext;

        public UnitOfWork(ITeamService teamService, 
            IFootballerService footballerService, 
            IManagerService managerService, 
            INationalTeamService nationalTeamService, 
            IPositionService positionService, 
            ITacticService tacticService,
            IManagementPositionService managementPositionService,
            ICoachService coachService,
            ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
            this.FootballerService = footballerService;
            this.ManagerService = managerService;
            this.NationalTeamService = nationalTeamService;
            this.PositionService = positionService;
            this.TacticService = tacticService;
            this.CoachService = coachService;
            this.ManagementPositionService = managementPositionService;
            this.TeamService = teamService;

        }
        public ITeamService TeamService { get; set; }
        public IFootballerService FootballerService { get; set; }
        public IManagerService ManagerService { get; set; }
        public INationalTeamService NationalTeamService { get; set; }
        public IPositionService PositionService { get; set; }
        public ITacticService TacticService { get; set; }
        public ICoachService CoachService { get; set; }
        public IManagementPositionService ManagementPositionService { get; set; }

        public async Task SaveChangesAsync()
        {
            await _dbContext.SaveChangesAsync();
        }
    }
}