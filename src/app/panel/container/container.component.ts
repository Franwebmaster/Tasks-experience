import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { saveStorage } from './saveStorage.decorator';


@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
	@ViewChild('descricaoInput') descricaoInput : ElementRef;

	//Recebendo descricão do input
	descricao = '';
	//Gerando Array de tarefas
	tarefas = [];

  constructor() {
  	//Salvando Tarefas em localStorage com Decorator
  	this.tarefas = JSON.parse(localStorage.getItem('tarefas'))  || [[], [], []];
  }

  ngOnInit() {}

  //Function para apresentação do modal
  //recebendo o estado por parametro
  modalManipulator(state) {
  	document.getElementById('modal').style.display = state;
  }

  //Function para adicionar descricao para array tarefas
  @saveStorage()
  addTarefa() {
  	if (this.descricaoInput.nativeElement.value == '') {
  		document.getElementById('descricao-input').classList.add('erro');
  	} else {
  		this.tarefas[0].push(this.descricao);
      	this.modalManipulator("none");
      	this.descricaoInput.nativeElement.value = '';
      	document.getElementById('descricao-input').classList.remove('erro');
  	}
  }

  //Function para mover indice entre array tarefas
  @saveStorage()
  movendoTarefas(t1, t2, indice) {
  	this.tarefas[t1].push(...this.tarefas[t2].splice(indice, 1))
  }

  //Function para remover indice do array
  @saveStorage()
  deletarTarefa(indice, t) {
  	this.tarefas[t].splice(indice, 1)
  }
}
