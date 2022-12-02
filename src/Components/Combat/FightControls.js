import React from "react";
import { connect } from "react-redux";
import { combatAction, endCombat } from "../../actions";


const FightControls = ({dispatch, enemy, player}) => {

    const attack = (e) => {
        const combatEnemy = JSON.parse(JSON.stringify(enemy)) //Deep copy combatant's state
        const combatPlayer = JSON.parse(JSON.stringify(player))
        const playerAtkType = e.target.getAttribute('data')
        let enemyAtkType = Math.floor(Math.random() * 20) + 1
        console.log(enemyAtkType)
        if(enemyAtkType > 9){
            enemyAtkType = enemy.mainAtk
        } else if(enemyAtkType > 3){
            enemyAtkType = enemy.secondaryAtk
        } else {
            enemyAtkType = enemy.weakAtk
        }
        console.log(enemyAtkType)
        let playerDmg = player[playerAtkType]
        let enemyDmg = enemy[enemyAtkType]
        let combatAdv = 'neither'
        const playerAdv = () => {
            playerDmg = Math.floor(playerDmg * 1.3)
            enemyDmg = Math.floor(enemyDmg * 0.85)
            combatAdv = 'player'
        }
        const enemyAdv = () => {
            playerDmg = Math.floor(playerDmg * 0.85)
            enemyDmg = Math.floor(enemyDmg * 1.3)
            combatAdv = 'enemy'
        }
        console.log(e.target.getAttribute('data'))
        switch(playerAtkType){
            case 'strength' : 
                switch (enemyAtkType) {
                    case 'dexterity' : 
                        playerAdv();
                        break;
                    case 'intelligence' :
                        enemyAdv();
                        break;
                    default : console.log('advantage switch error 1')
                };
                break;
            case 'dexterity' : 
                switch (enemyAtkType) {
                    case 'strength' : 
                        enemyAdv();
                        break;
                    case 'intelligence' : 
                        playerAdv();
                        break;
                    default : {console.log('advantage switch error 2')}
                };
                break;
            case 'intelligence' : 
                switch (enemyAtkType) {                   
                    case 'strength' : 
                        playerAdv();
                        break;
                    case 'dexterity' : 
                        enemyAdv();
                        break;
                    default : {console.log('advantage switch error 3')}
                };
                break;
            default : {console.log('advantage switch error 4')}
        }
        console.log(playerDmg)
        const combatText = () => {
            switch (combatAdv) {
                case 'player' : {
                    return [`Your ${playerAtkType} attack countered the enemy's ${enemyAtkType} attack!`, `You dealt ${playerDmg} damage, and recieved ${enemyDmg} damage from the enemy`]
                    }
                case 'enemy' : {
                    return [`Your ${playerAtkType} attack was countered by the enemy's ${enemyAtkType} attack!`, `You dealt ${playerDmg} damage, and recieved ${enemyDmg} damage from the enemy`]
                }
                default : {
                    return [`You both attacked with ${playerAtkType}, dealing regular damage`, `You dealt ${playerDmg} damage, and recieved ${enemyDmg} damage from the enemy`]
                }
            } 

        }
        
        
        combatEnemy.hpCurrent = combatEnemy.hpCurrent - playerDmg
        combatPlayer.hpCurrent = combatPlayer.hpCurrent - enemyDmg
        dispatch(combatAction(combatEnemy, combatPlayer, combatText()))
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