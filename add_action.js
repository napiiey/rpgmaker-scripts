//戦闘行動の追加スクリプト
const enemyOrActor=1; //追加対象が敵か味方か 敵:0 味方:1
const id=0; //追加対象ID
const targetIndex=-2; //-2:ラストターゲット -1:ランダム 0以降:ターゲットの番号
const skillId=31; //スキルID
this.iterateBattler(enemyOrActor,id,function(battler){if (!battler.isDeathStateAffected()){
    const action = new Game_Action(battler, true); action.setSkill(skillId);
    if (targetIndex === -2) {action.setTarget(battler._lastTargetIndex);
    } else if (targetIndex === -1) {action.decideRandomTarget();
    } else {action.setTarget(targetIndex);};battler._actions.push(action);this.setWaitMode('action');
}}.bind(this))
