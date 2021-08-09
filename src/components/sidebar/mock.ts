import c from "@/common/core/commonVars"
export default {
    settingsTable:[
        {name: 'Client', id: 1, baseName: c.clientBaseName,iconName:'people'},
        {name: 'Type de client', id: 3, baseName: c.typeClientBaseName,iconName:'person_pin'},
        {name: 'Espace', id: 2, baseName:c.espaceBaseName,iconName:'zoom_out_map'},
        {name: 'Type d\'espace', id: 5, baseName:c.typeEspaceBaseName,iconName:'holiday_village'},
        {name: 'Etat Espace', id: 4, baseName:c.etatEspaceBaseName,iconName:'assignment_turned_in'},
        {name: 'Materiel', id: 6, baseName:c.materielBaseName,iconName:'home_repair_service'},
        {name: 'Affectation matériel', id: 7, baseName:c.affectationMaterielBaseName,iconName:'assignment_returned'},
      ]
}