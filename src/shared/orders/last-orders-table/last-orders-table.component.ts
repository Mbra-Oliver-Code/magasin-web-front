import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TableTemplateComponent } from '../../table-template/table-template.component';
import { TableCol, TableRow } from '../../../../types/global';

@Component({
  selector: 'app-last-orders-table',
  imports: [CommonModule, TableTemplateComponent],
  templateUrl: './last-orders-table.component.html',
  styleUrl: './last-orders-table.component.less',
})
export class LastOrdersTableComponent {
  columns: TableCol[] = [
    { key: 'orderNumber', label: 'N  de commande', type: 'text' },
    { key: 'customer', label: 'Client', type: 'text' },
    { key: 'total', label: 'Total', type: 'text' },
    { key: 'payed', label: 'Pay ', type: 'text' },
    { key: 'status', label: 'Statut', type: 'text' },
  ];

  data: TableRow[] = [
    {
      orderNumber: '653518',
      customer: 'Dupont, Pierre',
      total: '13.23 ',
      payed: 'non',
      status: 'Ouverte',
    },
    {
      orderNumber: '449003',
      customer: 'Lefebvre, Marie',
      total: '13.23 ',
      payed: 'non',
      status: 'Ferme',
    },
    {
      orderNumber: '651535',
      customer: 'Martin, Fran ois',
      total: '13.23 ',
      payed: 'non',
      status: 'Ouverte',
    },
    {
      orderNumber: '267400',
      customer: 'Durand, Jean-Pierre',
      total: '13.23 ',
      payed: 'non',
      status: 'Ferm e',
    },
    {
      orderNumber: '487441',
      customer: 'Bernard, Sophie',
      total: '13.23 ',
      payed: 'non',
      status: 'Ouverte',
    },
  ];

  onSearch(searchTerm: string) {
    console.log('Searching for:', searchTerm);
  }

  onFilter(filters: any) {
    console.log('Applying filters:', filters);
  }

  onPageChange(pageInfo: { page: number; pageSize: number }) {
    console.log('Changing page:', pageInfo);
  }

  onButtonClick(row: TableRow) {
    console.log('Button clicked for row:', row);
  }
}
