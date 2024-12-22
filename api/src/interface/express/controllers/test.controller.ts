import Service from '@/service';
export default class TestController {
    private testService: Service;
    constructor (testService: Service) {
        this.testService = testService;
    }    
}
