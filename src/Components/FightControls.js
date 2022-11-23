import React from "react";
import { connect } from "react-redux";
import { combatAction, endCombat } from "../actions";


const FightControls = ({dispatch, enemy, player}) => {
    const combatEnemy = JSON.parse(JSON.stringify(enemy)) //Deep copy combatant's state
    const combatPlayer = JSON.parse(JSON.stringify(player))
    const attack = () => {
        combatEnemy.hpCurrent = combatEnemy.hpCurrent - combatPlayer.dmg
        dispatch(combatAction(combatEnemy, combatPlayer))
        if(combatEnemy.hpCurrent <= 0){
            dispatch(endCombat())
        }
    }

    return (
        <button onClick={attack}>Attack!</button>
    )
}

const mapState = (state) => {
    return {
        enemy: state.enemy,
        player: state.player
    }
}

export default connect(mapState)(FightControls)