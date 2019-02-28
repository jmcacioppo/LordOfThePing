import React from 'react';
import Match from './Match';
import { MatchModel } from '../data/matches'

const styles = {
    MatchList: {
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: '25px',
        width: '50%'
    }
}

const MatchList = (props: any) => {
    return (
        <div style={styles.MatchList}>
            {props.matches.map((match: MatchModel) => <Match key={match.id} match={match}/>)}
        </div>
    );
}

export default MatchList;