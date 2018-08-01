# gladys-scriptexec
Permet d'ajouter la possibilités à Gladys de lancer des scripts avec des commandes textuelles personalisées

Installation du module : <br>
Onglet Module -> Avancé : <br>
Nom : Script-Exec <br>
Version : 0.1 <br>
URL : https://github.com/J0lan/gladys-script-exec <br>
**slug : scriptexec** <br>


Prerequisites
-------------
- [Gladys](http://gladysproject.com)

Getting started
-------------
The install add 
10 paramaters : 
* SCRIPT1 set value to 1
* SCRIPT2 set value to 2
* SCRIPT3 set value to 3
* SCRIPT4 set value to 4
* SCRIPT5 set value to 5
* SCRIPT6 set value to 6
* SCRIPT7 set value to 7
* SCRIPT8 set value to 8
* SCRIPT9 set value to 9
* SCRIPT10 set value to 10

10 Sentences : 
* Script 1
* Script 2
* Script 3
* Script 4
* Script 5
* Script 6
* Script 7
* Script 8
* Script 9
* Script 10

1 Answer :
* " " 

**Comment fonctionne le module** <br>
Le module permet de déclencher avec des phrases personnalisée jusqu'à 10 scripts. Pour cela il créé 10 paramètres SCRIPT1 à SCRIPT10, la valeur de ces paramètres doit être l'id de votre script. <br>
Ensuite il crée 10 phrases "Script 1" à "Script 10" qui permettent ce créer les labels scrtip1 à script10. <br>
Donc en lançant la commande script 1 j'exécuterais le script correspondant à à la valeur du paramètres SCRIPT1 (par défaut le script 1). <br>
Une phrase vide est ajoutée afin que le module ne vous réponde pas. En effet si vous déclencher des scripts vous aurez peut être envie de créer la réponse directement dans le script. Donc pour obtenir une réponse au déclenchement d'un script, il suffit de mettre dans votre script : <br>
<code>gladys.notification.create({ user: 1, title: ' ', text: "Votre réponse" , icon: 'fa fa-home', iconColor: 'bg-light-blue'}); </code> <br>
Et gladys vous notifiera selon vos préférences de notification (Paramètres -> notification") <br>


**Pour ajouter vos phrases personnalisées :** <br>
Il vous suffit avec télégram, la reonnaissance vocale, ou encore crtl+espace dans le navigateur de créer votre première phrase. <br>
Une fois cela fait gladys devrait vous répondre qu'il n'a pas compris ce que vous demandiez (label no-commande-detected).  <br>
Allez dans le Brain de galdys et votre phrase devrait se trouver dans l'onglet "phrases en attentes". Sélectionner dans la liste des labels le label scriptexec.script1 et cliquez sur "Entrainer le Brain". Une fois cela fait votre commande déclenchera le script dont l'id est renseigné dans les paramètres pour le paramètre SCRIPT1.  <br>



####
What is Gladys project
-------------

**Website :** [https://gladysproject.com](http://gladysproject.com) <br>
**Community :** [https://community.gladysproject.com/](https://community.gladysproject.com/)
