import { httpUrl } from '../plugins/http';

export default {
    listar: () => {
        return httpUrl.get('argumentos/devops-task-test-front');
    }
}