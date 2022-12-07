import React from "react";
import { connect } from "react-redux";
import { combatAction, endCombat } from "../../actions";


const FightControls = ({dispatch, enemy, player}) => {

    const attack = (e) => {
        const combatEnemy = JSON.parse(JSON.stringify(enemy)) //Deep copy combatant's state
        const combatPlayer = JSON.parse(JSON.stringify(player))
        const playerAtkType = e.target.getAttribute('data') //Recieves attack stat from button pressed
        let enemyAtkType = Math.floor(Math.random() * 20) + 1 // Randomizes enemy attack choice, weighted towards its highest stat
        if(enemyAtkType > 9){
            enemyAtkType = enemy.mainAtk
        } else if(enemyAtkType > 3){
            enemyAtkType = enemy.secondaryAtk
        } else {
            enemyAtkType = enemy.weakAtk
        }
        let playerDmg = player[playerAtkType]
        let enemyDmg = enemy[enemyAtkType]
        let combatAdv = 'neither' 
        const playerAdv = () => {//Strengthens or weakens attack on a rock paper scissors type system: Stength > Dexterity > Intelligence > Strength
            playerDmg = Math.floor(playerDmg * 1.3)
            enemyDmg = Math.floor(enemyDmg * 0.85)
            combatAdv = 'player'
        }
        const enemyAdv = () => {
            playerDmg = Math.floor(playerDmg * 0.85)
            enemyDmg = Math.floor(enemyDmg * 1.3)
            combatAdv = 'enemy'
        }
        const advFunc = () => { // Compares chosen atk with enemt atk 
            switch(playerAtkType){
                case 'strength' : 
                    switch (enemyAtkType) {
                        case 'dexterity' : 
                            playerAdv();
                            break;
                        case 'intelligence' :
                            enemyAdv();
                            break;
                        default : return null
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
                        default : return null
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
                        default : return null
                    };
                    break;
                default : {console.log('advantage switch error 4')}
            }
        }  
        advFunc()
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
        
        
        combatEnemy.hpCurrent = combatEnemy.hpCurrent - playerDmg //Now that all dmg factors have been run, update hp totals
        combatPlayer.hpCurrent = combatPlayer.hpCurrent - enemyDmg
        if(combatEnemy.hpCurrent <= 0){ //Prevents negative health
            combatEnemy.hpCurrent = 0
        }
        dispatch(combatAction(combatEnemy, combatPlayer, combatText()))
    }
    const endCombatFunc = () => {
        dispatch(endCombat())
    }
    

    if(enemy.hpCurrent > 0){ 
        return (
        <>
        <button className={'combatButton'} data={'strength'} onClick={attack}>Attack with melee!</button>
        <button className={'combatButton'} data={'dexterity'} onClick={attack}>Attack with ranged!</button>
        <button className={'combatButton'} data={'intelligence'} onClick={attack}>Attack with magic!</button>
        </>
    )} else {
        return (
            <button className={'combatButton'}onClick={() => dispatch(endCombat)}>You've won the battle!</button>
        )
    }
}

const mapState = (state) => {
    return {
        enemy: state.enemy,
        player: state.player
    }
}

export default connect(mapState)(FightControls)