import { list } from "@keystone-next/keystone/schema";
import { text, password, integer, select } from "@keystone-next/fields";


export const Product = list({
    fields: {
        unitSize: text({isRequired: true}),
        options: text({isRequired: true}),
        price: integer(),
        total: integer(),
    }
})