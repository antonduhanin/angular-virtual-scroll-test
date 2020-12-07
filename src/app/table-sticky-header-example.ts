import { Component } from "@angular/core";
import { TableVirtualScrollDataSource } from "ng-table-virtual-scroll";

const DATA = getData(1000);

/**
 * @title Table with sticky header
 */
@Component({
  selector: "table-sticky-header-example",
  styleUrls: ["table-sticky-header-example.css"],
  templateUrl: "table-sticky-header-example.html"
})
export class TableStickyHeaderExample {
  displayedColumns = ["id", "name"];

  dataSource = new TableVirtualScrollDataSource<TestElement>(DATA);
}

interface TestElement {
  id: number;
  name: string;
}

function getData(n = 1000): TestElement[] {
  return Array.from({ length: n }, (v, i) => ({
    id: i + 1,
    name: `Element #${i + 1}`
  }));
}

/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
