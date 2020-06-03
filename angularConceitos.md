### Databinding
Databinding é uma forma de associar informações do componente na template e virse-versa.

4 maneiras de fazer o databinding:

- ##### interpolação - {{variavel}} 
     Exibe o valor de uma variavel ou método no template (do componente para o template)
     
         <p>Exemplo de interpolacao : {{ url }}</p>
         <p>Resultado de  1 + 1 = {{ 1 + 1 }}</p>
         <p>Resultado de um método 1 + 2: {{getValor()}}</p>
         <p>Expressoes boleana:  {{curso || getCurtirCurso()}}</p>
    
- ##### Property binding - [propriedade]
    Exibe o valor de uma variavel ou método no template -  (do componente para o template)

        <img [src]="urlImagem">
        <img bind-src="urlImagem">
       
   - Class Binding 
   
        É uma forma de aplicar estilos de classe utilizando property binding
        
            <select #classe (change)="0">
                <option value="alert-success">Sucesso</option>
            </select>
            <div class="alert " role="alert" [class.alert-success]="classe.value == 'alert-success'">
                Sucesso
            </div>
		
    -  Style Binding 
        É uma forma de aplicar stilos utilizando property biding
    
            <div class="alert alert-danger" role="alert" [style.display]="classe.value =='alert-danger' ? 'block' : 'none'">
                Style Binding
             </div>
 - ##### Event binding - (evento)
    Escuta o evento da template(html) e trata-lo no componente  (do template para o componente).
    
        <button class="btn btn-primary" (click)="botaoClicado()" >
            Me clique
        </button>
        
        <input type="text"
             (keyup)="onKeyUp($event)"
             (keyup.enter)="salvarValor($event.target.value)"
             (blur)="salvarValor(campoInput.value)"
             #campoInput
        >
        <span
        (mouseup)="onMouseOverUp()"
        (mouseout)="onMouseOverOut()"
        [class.highlight]="isMouseOver"
        >Passe o mouse sobre mim</span>

- ##### ngModel(Two-way-data) -  {(ngModel)}
    Mantém o template e o componente atualizado ao mesmo tempo (binding de eventos + binding de propriedade) sintax banana na caixa [()]
    
    Utilizando o conceito de property binding e o event binding é possível fazer passar um dado para o evento e virse versa.
     
          <input type="text" 
            [value]="nome"
            (input)="nome = $event.target.value"
          />

          <input type="text" 
            [ngModel]="nome"
            (ngModelChange)="nome = $event"
          />

    Mas existe uma maneira mais eficaz que combina o event binding com o property binding
    
          <input type="text" [(ngModel)]="nome">

          <input type="text" bindon-ngModel="nome">


### Operador Elvis(?)  
Evita propriedade nula de um objeto, faz verificação de um objeto de uma maneira simples
- Sem o perador Elvis:
    
    
    <p>Responsável: {{tarefa.responsavel != null ? tarefa.responsavel.nome : ''}}</p>
	
- Com o operador Elvis:
  

	<p>Responsável: {{tarefa.responsavel?.usuario?.nome}}</p>


### Diretivas:
É uma maneira de passar instruções para o template html
componentes também são diretivas em um template

- Diretivas estruturais - Interagem com a view e modificam a estrutura do DOM e/ou código HTML
	- ngFor, ngFor, ngSwitch, ng if, ngContent

- Diretivas de Atributos - Interagem com o elemento em que foram aplicadas (não modificam a estrutura do DOM)
	- ng-class, ng-style
	

