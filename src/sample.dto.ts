// enum SampleEnum {
//     option1 = 'option1'
// }

export class SampleDto {
    name: string;
    // type: SampleEnum;    // Has issues with Swagger module which seem to be related to targetting ESM
    storageconf: string;
}
