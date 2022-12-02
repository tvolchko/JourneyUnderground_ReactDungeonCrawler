import React from "react";
import { connect } from "react-redux";
import { combatAction, endCombat } from "../../actions";


const FightControls = ({dispatch, enemy, player}) => {

    const attack = (e) => {
        const combatEnemy = JSON.parse(JSON.stringify(enemy)) //Deep copy combatant's state
        const combatPlayer = JSON.parse(JSON.stringify(player))
        const playerAtkType = e.target.data
        let enemyAtkType = Math.floor(Math.random() * 20) + 1
        if(enemyAtkType < 10){
            enemyAtkType = enemy.mainAtk
        } else if(enemyAtkType < 3){
            
        }
        combatEnemy.hpCurrent = combatEnemy.hpCurrent - combatPlayer.dmg
        dispatch(combatAction(combatEnemy, combatPlayer))
        if(combatEnemy.hpCurrent <= 0){
            dispatch(endCombat())
        }
    }

    return (
        <>
        <button className={'combatButton'} data={'strength'} onClick={attack}>Attack with melee!</button>
        <button className={'combatButton'} data={'dexterity'} onClick={attack}>Attack with ranged!</button>
        <button className={'combatButton'} data={'intelligence'} onClick={attack}>Attack with magic!</button>
        </>
    )
}

const mapState = (state) => {
    return {
        enemy: state.enemy,
        player: state.player
    }
}

export default connect(mapState)(FightControls)