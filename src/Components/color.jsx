function Color({ team }) {
    return (
        <div className={`${team["team"]} team-color`} >
            <div className="teamName">
                <h1 style={{ color: team.primary }}>
                    {team['team']}
                </h1>
            </div>
            <div className="team-colorboard">
                <div className="team-primary">
                    <span className="strip"
                        style={{ backgroundColor: team.primary }}>
                    </span>
                    {team['primary']}
                </div>
                <div className="team-secondary">
                    <span className="strip"
                        style={{ backgroundColor: team.secondary }}>
                    </span>
                    {team['secondary']}
                </div>
                <div className="team-third">
                    <span className="strip"
                        style={{ backgroundColor: team.third }}>
                    </span>
                    {team['third']}
                </div>
            </div>
        </div >
    );
}

export default Color
