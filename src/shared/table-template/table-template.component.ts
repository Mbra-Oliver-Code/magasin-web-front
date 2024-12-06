import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TableCol, TableRow } from '../../../types/global';
import { CommonModule } from '@angular/common';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-table-template',
  imports: [CommonModule],
  templateUrl: './table-template.component.html',
  styleUrls: ['./table-template.component.less'],
})
export class TableTemplateComponent implements OnInit {
  @Input() title: string = '';
  @Input() columns: TableCol[] = [];
  @Input() data: TableRow[] = [];
  @Input() showSearch: boolean = true;
  @Input() showFilters: boolean = true;
  @Input() showPagination: boolean = true;
  @Input() pageSizes: number[] = [10, 20, 50];
  @Output() search: EventEmitter<string> = new EventEmitter();
  @Output() filter: EventEmitter<any> = new EventEmitter();
  @Output() pageChange: EventEmitter<{ page: number; pageSize: number }> =
    new EventEmitter();
  @Output() edit: EventEmitter<TableRow> = new EventEmitter();
  @Output() show: EventEmitter<TableRow> = new EventEmitter();
  @Output() delete: EventEmitter<TableRow> = new EventEmitter();

  currentPage: number = 1;
  pageSize: number = this.pageSizes[0];
  totalPages: number = 0;
  actionMenuVisible: TableRow | null = null;
  private searchSubject = new Subject<string>();

  constructor() {
    this.searchSubject
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe((value) => {
        this.onSearch(value);
      });
  }
  ngOnInit(): void {
    this.calculateTotalPages();
  }

  calculateTotalPages() {
    this.totalPages = Math.ceil(this.data.length / this.pageSize);
  }
  onSearch(event: any) {
    if (event && event.target && event.target.value) {
      this.searchSubject.next(event.target.value);
    }
  }

  onFilter(filters: any) {
    this.filter.emit(filters);
  }

  onPageSizeChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    this.pageSize = parseInt(select.value);
    this.currentPage = 1;
    this.pageChange.emit({ page: this.currentPage, pageSize: this.pageSize });
  }

  onPreviousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.pageChange.emit({ page: this.currentPage, pageSize: this.pageSize });
    }
  }

  onNextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.pageChange.emit({ page: this.currentPage, pageSize: this.pageSize });
    }
  }

  onButtonClick(row: TableRow, key: string) {
    // this.buttonClick.emit({ row, key });
  }

  toggleActionMenu(row: TableRow) {
    this.actionMenuVisible = this.actionMenuVisible === row ? null : row;
  }

  onEdit(row: TableRow) {
    this.edit.emit(row);
    this.toggleActionMenu(row);
  }

  onShow(row: TableRow) {
    this.show.emit(row);
    this.toggleActionMenu(row);
  }

  onDelete(row: TableRow) {
    this.delete.emit(row);
    this.toggleActionMenu(row);
  }
}
