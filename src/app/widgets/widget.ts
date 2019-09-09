export type WidgetType = 'small' | 'action-plan';
export interface IWidgetSmallPayoad {
  total: number;
  imageUrl: string;
}

export interface ITodoListItem {
  description: string;
  done: boolean;
}
interface ITodoListItems {
  year: number;
  todos: ITodoListItem[];
}

export interface IWidgetActionPlanPayoad {
  currentAge: number;
  slider: {
    startYear: number;
    endYear: number;
  };
  todoList: ITodoListItems[];
}

export class Widget  {
  private _isHandheld = false;
  private _col = 1;
  private _row = 1;
  private _handsetCol = 1;
  private _handsetRow = 1;
  private _type: WidgetType = 'small';
  private _title: string;
  private _description?: string;
  private _actionText?: string;
  private _payload?: IWidgetSmallPayoad | IWidgetActionPlanPayoad;
  constructor(type: WidgetType, title: string, col: number, row: number) {
    this.type = type;
    this.title = title;
    this.col = col;
    this.row = row;
  }

  get isHandheld(): boolean {
    return this._isHandheld;
  }

  set isHandheld(value: boolean) {
    this._isHandheld = value;
  }

  get col(): number {
    return this._col;
  }

  set col(value: number) {
    this._col = value;
  }

  get row(): number {
    return this._row;
  }

  set row(value: number) {
    this._row = value;
  }

  get handsetCol(): number {
    return this._handsetCol;
  }

  set handsetCol(value: number) {
    this._handsetCol = value;
  }

  get handsetRow(): number {
    return this._handsetRow;
  }

  set handsetRow(value: number) {
    this._handsetRow = value;
  }

  get type(): WidgetType {
    return this._type;
  }

  set type(value: WidgetType) {
    this._type = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get actionText(): string {
    return this._actionText;
  }

  set actionText(value: string) {
    this._actionText = value;
  }

  get payload(): IWidgetSmallPayoad | IWidgetActionPlanPayoad {
    return this._payload;
  }

  set payload(value: IWidgetSmallPayoad | IWidgetActionPlanPayoad) {
    this._payload = value;
  }

  getRowCol = (): {row: number, col: number} => {
    if (this.isHandheld) {
      return {row: this.handsetRow, col: this.handsetCol};
    }
    return {row: this.row, col: this.col};
  }
}
