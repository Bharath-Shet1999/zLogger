export class Log {
    static success(msg: string){
        console.log(`%c ${msg}`, 'color: green');
    }
    static danger(msg: string){
        console.log(`%c ${msg}`, 'color: red');
    }
    static infox(msg: string){
        console.log(`%c ${msg}`, 'color: yellow');
    }
}