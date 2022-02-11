context('화면 테스트', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/')
  })

  /* 화면 ui 테스트(화면에 요소들이 잘 보이는지 테스트) */
  it('title 부분이 잘 보이는지', () => {
    // Todo list 글씨와 날짜 정보 항목이 보여야 한다.
    cy.get('.todolist-title').should('be.visible');
    cy.get('.todolist-title').should('contain.text', 'To-do list');
    cy.get('.today-title').should('be.visible');
  })

  it('Add Todo 부분이 잘 보이는지', () => {
    // + 버튼과 할 일 입력 항목이 잘 보여야 한다.
    cy.get('p > button').should('be.visible');
    cy.get('.ng-untouched').should('be.visible');
  })

  it('Todo List 영역이 잘 보이는지', () => {
    // 기본적으로 `운동하기`와 '빨래 하기' 항목이 보여야 한다.
    cy.get('.todoList').should('contain.text', '운동 하기');
    cy.get('.todoList').should('contain.text', '빨래 하기');
  })

  /* ui 조작 테스트(ui를 클릭했을 때 제대로된 기능을 수행하는지 테스트) */
  it('Todo 추가 기능 테스트', () => {
    // input에 빨래하기를 넣고 add 버튼을 클릭하면
    cy.get('.ng-untouched').type('빨래 하기');
    cy.get('p > button').click().then(() => {
      // Todo List에 빨래하기 항목이 추가되서 보여야한다.
      cy.get('.todoList').should('contain.text', '빨래 하기');
    })
  })

  it('Todo 완료 기능 테스트', () => {
    // 운동 하기의 완료 버튼 클릭시
    cy.get('#check').eq(0).click().then(() => {
      // 운동 하기에 줄이 그어지는지
      cy.get('.todoList').should('have.css', 'text-decoration', 'line-through solid rgb(0, 0, 0)');
    })
  })

  it('Todo 삭제 기능 테스트', () => {
    // 운동 하기의 삭제 버튼 클릭시 Todo List에서 더이상 안보이는지
    cy.get('.remove').eq(0).click().then(() => {
      cy.get('.todoList').should('not.contain.text', '운동 하기');
    })
  })

  it('Todo 전체 체크 기능 테스트', () => {
    // 전체 할 일 목록 체크하기
    cy.get('.btn-group').contains('All Completed').click().then(() => {
      cy.get('.todoList').should('have.css', 'text-decoration', 'line-through solid rgb(0, 0, 0)');
    })
  })

  it('Todo 전체 체크 해제 기능 테스트', () => {
    // 전체 할 일 목록 체크 해제하기
    cy.get('.btn-group').contains('All Reset').click().then(() => {
      cy.get('span').should('contain.text', 'false');
    })
  })

  it('Todo 전체 삭제 기능 테스트', () => {
    // 전체 할 일 목록 삭제하기
    cy.get('.btn-group').contains('All Clear').click().then(() => {
      cy.get('.todoList').should('be.empty');
    })
  })
})
