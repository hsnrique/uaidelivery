export type getTenantResponse = {
    name: string;
    mainColor: string;
    secondColor: string;
}

export const useApi = () => ({

    getTenant: (tenantSlug: string): boolean | getTenantResponse => {
        switch(tenantSlug) {
            case 'uaiburger':
                return {
                    name: 'UaiBurger',
                    mainColor: '#ff0000',
                    secondColor: '#00ff00'
                }
            break;
            case 'uaipizza':
                return {
                    name: 'UaiPizza',
                    mainColor: '#0000ff', 
                    secondColor: '#ff0000'
                }
            break;
            default: return false;        
        }    
    }

});