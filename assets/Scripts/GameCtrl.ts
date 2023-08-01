import { _decorator, CCInteger, Component, director, EventKeyboard, Input, input, KeyCode, Node } from 'cc';
const { ccclass, property } = _decorator;

import { Ground } from './Ground';
import { Results } from './Results';
import { Bird } from './Bird';


@ccclass('GameCtrl')
export class GameCtrl extends Component {
    
    @property({
        type: Ground,
        tooltip: 'this is ground',
    })
    public ground: Ground;

    @property({
        type: Results,
    })
    public results: Results;

    @property({
        type: Bird,
    })
    public bird: Bird;


    @property({
        type: CCInteger,
    })
    public speed: number = 300;


    @property({ 
        type:CCInteger
    })
    public pipeSpeed:number = 200;


    onLoad(){
        this.initListener();
        this.results.resetScore();
        director.pause();
    }

    initListener(){
        input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
        // this.node.on(Node.EventType.TOUCH_START, () => {
        //     this.bird.fly();
        // })

        // this.node.on(Node.EventType.MOUSE_DOWN, () => {
        //     this.bird.fly();
        // });
    }


    onKeyDown(event: EventKeyboard){
        switch(event.keyCode){
            case KeyCode.KEY_Q:
                this.gameOver();
            break;

            case KeyCode.KEY_A:
                this.results.addScore();
            break;

            case KeyCode.KEY_R:
                this.resetGame();
                this.bird.resetBird();
            break;

            case KeyCode.KEY_F:
                this.bird.fly();
            break;


        }
    }


    startGame(){
        this.results.hideResult();  
        director.resume();

    }

    resetGame(){
        // 重置分数，开始游戏。
        this.results.resetScore();
        this.startGame();

    }

    gameOver(){
        // 停止游戏，显示分数
        this.results.showResult();
        director.pause();
    }


    update(deltaTime: number) {
        
        
    }
}

