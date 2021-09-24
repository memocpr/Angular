
export class CounterService{

    activeToInactive=0;
    inactiveToActive=0;

    incredimentActiveToInactive(){
        this.activeToInactive++
        console.log('activeToInactive : '+this.activeToInactive);
    }

    incredimentInactiveToActive(){
        this.inactiveToActive++;
        console.log('inactiveToActive : '+this.inactiveToActive);
        
    }

}