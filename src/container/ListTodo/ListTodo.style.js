import styled from "styled-components";

const ListTodoWrapper = styled.div`
  .header {
    text-align: center;
  }
  .container {
    margin: 38px auto 0px;
    padding-bottom: 30px;
    width: 720px;
  }
  .search {
    width: 718px;
  }
  .input-search {
    width: 99%;
    height: 30px;
    margin-bottom: 30px;
  }
  input {
    border-radius: 4px;
    border: 1px solid #bdbdbd;
  }
  select {
    border-radius: 4px;
    border: 1px solid #bdbdbd;
  }
  .item-wrap {
    margin-bottom: 28px;
    .checked {
      text-decoration-line: line-through;
    }
  }
  .item {
    border: 1px solid;
    padding: 8px 20px;
    display: flex;
    align-items: center;
  }
  .item .checked {
    flex: 0.15;
  }
  .item .item-title {
    flex: 1;
  }
  .item-btn-function button {
    color: #d5f4f8;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  .btn-detail {
    margin-right: 30px;
    padding: 8px 32px;
    background-color: #00bcd4;
  }
  .btn-remove {
    margin-right: 30px;
    padding: 8px 18px;
    background-color: #d9534f;
  }

  .form-update {
    border-top: none !important;
    border: 1px solid black;
    padding: 24px 39px;
    .update-field-title {
      padding: 10px;
      width: 100%;
      margin-bottom: 24px;
    }
    .txt-label {
      font-size: 14px;
      font-weight: 500;
    }
    .update-description {
      margin-bottom: 24px;
    }
    .field-description {
      min-height: 98px;
      width: 100%;
      font-size: 16px;
      padding: 8px;
    }
    .update-more {
      display: flex;
      margin-bottom: 24px;
      .update-more-date {
        flex: 1;
        margin-right: 78px;
        .due-date {
          width: 100%;
          padding: 10px;
        }
      }
      .update-more-piority {
        flex: 1;
        .piority {
          width: 100%;
          padding: 10px;
        }
      }
    }
    .btn-update button {
      width: 100%;
      padding: 8px 0;
      background-color: #4caf50;
      border: 1px solid #4caf50;
      border-radius: 6px;
      color: #fff;
      font-size: 16px;
    }
  }
  .bulk-action {
    border: 1px solid;
    padding: 26px;
    display: flex;
    justify-content: space-between;
    background-color: #e0e0e0;
    button {
      padding: 10px 32px;
      border: none;
      border-radius: 4px;
      color: #fff;
      cursor: pointer;
    }
    .btn-done {
      background-color: #2196f3;
      margin-right: 48px;
    }
    .btn-rmv {
      background-color: #d9534f;
    }
  }
`;
export default ListTodoWrapper;
