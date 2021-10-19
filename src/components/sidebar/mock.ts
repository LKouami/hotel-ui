import c from "@/common/core/commonVars"
export default {
  settingsTable:[
        {name: 'Client', id: 1, baseName: c.clientBaseName,iconName:'people'},
        {name: 'Type de client', id: 3, baseName: c.clientTypeBaseName,iconName:'person_pin'},
        {name: 'Espace', id: 2, baseName:c.spaceBaseName,iconName:'zoom_out_map'},
        {name: 'Type d\'espace', id: 5, baseName:c.spaceTypeBaseName,iconName:'holiday_village'},
        {name: 'Etat Espace', id: 4, baseName:c.spaceStateBaseName,iconName:'assignment_turned_in'},
        {name: 'Reduction', id: 8, baseName:c.reductionBaseName,iconName:'assignment_turned_in'},
        {name: 'Utilisateur', id: 6, baseName:c.userBaseName,iconName:'person'},
        {name: 'Role', id: 7, baseName:c.roleBaseName,iconName:'work_outline'},
      ]
}