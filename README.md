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

- Diretivas estruturais - Interagem com a view e modificam a estrutura do DOM e/ou código HTML:
    - ngIf:    

          <div *ngIf="mostrarCurso">
              não existem cursos
          </div>
                  
    - ngSwitch:
    
            <div class="content" [ngSwitch]="aba">
              <p *ngSwitchCase="'mapa'"> modo mapa ativado</p>
              <p *ngSwitchCase="'lista'"> modo lista ativado</p>
              <p *ngSwitchDefault> modo home ativado</p>
            </div>
	- ngFor:
	        
            <ul>
              <li *ngFor="let curso of cursos, let i = index"> {{i}} {{curso}}</li>
            </ul>

	- ngContent:
        - Modelo do componente:  <app-exemplo-ng-content>
        
                <div class="panel panel-default">
                  <div class="panel-heading">
                    <ng-content select=".titulo"></ng-content>
                  </div>
                  <div class="panel-body">
                    <ng-content select=".conteudo"></ng-content>
                  </div>
                </div>  
            
       - Componente sendo utilizado:
       
                <app-exemplo-ng-content>
                  <div class="titulo">
                    Titulo
                  </div>
                  <div class="conteudo">
                    Conteúdo a ser exibido.
                  </div>
                  <div class="conteudo">
                    Conteúdo a ser exibido. 2
                  </div>
                </app-exemplo-ng-content> 

- Diretivas de Atributos - Interagem com o elemento em que foram aplicadas (não modificam a estrutura do DOM)
	- ng-class:
	
          <i class="glyphicon"
             [ngClass]="{
              'glyphicon-star': meuFavorito,
              'glyphicon-star-empty': !meuFavorito
             }"
             (click)="OnClick()">
          </i>
          
	- ng-style
	
            <button
              [ngStyle]="{
                'background': ativo ? 'blue' : 'gray',
                'color': ativo ? 'white' : 'black',
                'fotWeight': ativo ? 'bold' : 'normal',
                'fontSize': tamanhoFonte + 'px'
              }">
            </button>
	- Diretiva de atributo customizada:
	    - ElementRef: Faz referência ao elemento do DOM
	    - Renderer: Renderizador, responsável por fazer manipulação no elemento DOM
            
                export class FundoAmareloDirective {
                      constructor( private elementRef: ElementRef , private  rendere: Renderer2) {
                        // console.log(this.elementRef);
                        // this.elementRef.nativeElement.style.backgroundColor = 'yellow';
                        this.rendere.setStyle(this.elementRef.nativeElement, 'background-color:', 'yellow');
                    
                      }   
                }
        
            Exemplo: Mudando background com diretiva customizada 
            
                    <p appFundoAmarelo>texto com fundo amarelo!</p>
                    
                    <button appFundoAmarelo> Fundo amarelo</button>
                
        - HostListener: Escuta evento do hospedeiro diretiva customizada
        - HostBinding: permite fazer a associação(binding) de um atributo/classe de uma diretiva para o elemento html
        
              @HostListener('mouseenter') onMouseOuver() {
                this.backgroundColor = 'yellow';
              }
              @HostListener('mouseleave') onMouseLeave() {
                this.backgroundColor = 'white';
              }
              @HostBinding('style.background-color') backgroundColor: string;
        
    - Diretiva de atributo customizada ng else:
    
    Diretiva:
    
        export class NgElseDirective {
          @Input() set appNgElse(condition: boolean) {
            if(!condition){
              this.viewContainerRef.createEmbeddedView(this.templaterRef);
            }else{
              this.viewContainerRef.clear();
            }
          }
          constructor(
            private templaterRef: TemplateRef<any>,
            private viewContainerRef: ViewContainerRef
          ) { }  
        }
    utilização:
    
        <div *appNgElse="mostrarCurso">
          lista de cursos
        </div>

### Services
Serviço é responsavel por buscar e enviar dados para o servidor. Além disso, o serviço também é responsável por fornece a lógica do negócio(Manipulação dos dados) para os componentes, criando classes de serviços diminuem a repetição de código.


### Pipes
Transforma um valor de uma template.

    <h5> Exemplos pipes</h5>
    <p>Título: {{livro.titulo | uppercase | lowercase}}</p>
    <p>Estrela: {{livro.rating  | number:'2.1-2'}}</p>
    <p>Páginas: {{livro.paginas | number}}</p>
    <p>Preço: {{livro.preco | currency: 'BRL': true}}</p>
    <p>Data: {{livro.data | date: 'dd-MMM-yyyy'}}</p>
    <p>URL: {{livro.url}}</p>
    
    <br>
    <p> Livro {{livro  | json}}</p>

Criando um pipe customizado para transformar texto em camelCase:
    
    export class CamelCasePipe implements PipeTransform {  
      transform(value: any, ...args: unknown[]): unknown {
        let values  = value.split(' ');
        console.log(values)
        let result = values.map( word => this.convert(word)).reduce((atual, next) => `${atual} ${next}`);
        return result;
    
      }
      convert(value: string) {
          return value.substr(0,1).toUpperCase() +
            value.substr(1).toLocaleLowerCase();
      }    
    }
- Locale - Internacionalização nos pipes

      providers: [
        {
          provide: LOCALE_ID,
          useValue: 'pt-BR'
          // useClass: '',
          // useFactory
        }
      ],

- Locale - Utilizando um serviço:
      
       providers: [
     
         SettingsService,
         {
           provide: LOCALE_ID,
           deps: [SettingsService],
           useFactory: settingsService => settingsService.getLocale()
         }
       ],

- Criando um Pipe Puro: pipe puro não olha as modificações do valor que é passado como parametro para o método de transform (não se usa pipe em filtro de array - exemplo didático)

        <ul>
          <li *ngFor="let liv of livros | filtroPipe: filtro"> {{liv}}</li>
        </ul>
        
        export class FiltroPipePipe implements PipeTransform {
        
          transform(value: any, args?: any): any {
            if ( value.length === 0 || args === undefined) {
              return value;
            }
            let filter = args.toLocaleLowerCase();
            return  value.filter( v => v.toLocaleLowerCase().indexOf(filter) !== -1);
          }
        
        }

- Criando um Pipe impuro: aceita as modificões em tempo real (não é usado para fazer orderBY ou filtro nos arrays)

        @Pipe({
          name: 'filtroArrayImpuro',
          pure: false
        })

    - Maneira correta de fazer filtro no array
    
            <ul>
              <li *ngFor="let liv of obterLivros()"> {{liv}}</li>
            </ul>
            
            obterLivros() {
            if (this.livros.length === 0 || this.filtro === undefined || this.filtro.trim() === 'null') {
              return this.livros;
            }
            return this.livros.filter(v => {
              if (v.toLocaleLowerCase().indexOf(this.filtro.toLocaleLowerCase()) !== -1) {
                return true;
              } else {
                return false;
              }
            });
            }
- Pipe Async - serve para fazer saída de um template mesmo que esse valor demore para ser retornado

      valorAsync = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Valor assíncrono'), 2000);
      });

### Rotas
Angular ler os parâmentros da rota e carrega a página daquela página

O angular cli cria um arquivo para configuração das rotas:

    const routes: Routes = [
      { path: 'cursos', component: CursosComponent},
      { path: 'login', component: LoginComponent},
      { path: '', component: HomeComponent}
    ];
    
    @NgModule({
      imports: [RouterModule.forRoot(routes)],
      exports: [RouterModule]
    })
    export class AppRoutingModule { }

A diretiva routerLink chama a rota desejada na template: 

    <nav>
      <div class="nav-wrapper">
        <a routerLink="" class="brand-logo right">Rotas ng2</a>
        <ul id="nav-mobile" class="left hide-on-med-and-down">
          <li><a routerLink="/login">Login</a></li>
          <li><a routerLink="/cursos">Cursos</a></li>
        </ul>
      </div>
    </nav>
    
Para aplicar CSS em rotas ativas pelo routerlink se utiliza a diretiva:

      <li routerLinkActive="active">  <a routerLink="/cursos">Cursos</a></li>

Parâmentros para as rotas: 

    const routes: Routes = [
      { path: 'curso/:id', component: CursoDetalheComponent},
    ];
    
Passando parâmetros para as rotas:

    <li routerLinkActive="active">  <a [routerLink]="['curso', idcurso.value] ">Cursos com id</a></li>
    
    export class CursoDetalheComponent implements OnInit, OnDestroy {
    
      id: string;
      inscricao: Subscription;
      constructor(private router: ActivatedRoute) {
        // this.id = this.router.snapshot.params['id'];
      }
    
      ngOnInit(): void {
        this.inscricao = this.router.params.subscribe( (parametros: any) => {
          this.id = parametros['id'];
        });
      }
      ngOnDestroy() {
        this.inscricao.unsubscribe();
      }
    
    }
Redirecionando rotas via código:

    private route: Router
            this.route.navigate(['/naoencontrado']);

Parâmetros para url(queryParams)

    <li routerLinkActive="active">  <a routerLink="/cursos" [queryParams]="{pagina:1}">Cursos</a></li>
    ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();
    this.inscricao = this.route.queryParams.subscribe( queryParams => {
      this.pagina = queryParams['pagina'];
    });
    }

Rotas filhas: 

    const alunosRoutes: Routes = [
      {
        path: 'alunos', component: AlunosComponent, children: [
          {path: 'novo', component: AlunoFornComponent},
          {path: ':id', component: AlunoDetalheComponent},
          {path: ':id/editar', component: AlunoFornComponent}
        ]
      },
    ];
