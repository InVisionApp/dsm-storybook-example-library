export const styles = `
  <style>
    @import url('https://fonts.googleapis.com/css?family=Roboto');
    .dsm-btn {
      outline: none;
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px 40px;
      border-radius: 3px;
      cursor: pointer;
      user-select: none;
      transition: background-color 0.2s, color 0.2s, width 0.2s, box-shadow 0.2s cubic-bezier(0.2, 0.91, 0.85, 0.96) 0s;
      background-color: #5377a1;
      color: #ffffff;
    }
    .dsm-btn svg {
      height: 25px;
      width: 25px;
      margin-left: 50px;
      fill: #ffffff;
    }
    .dsm-btn .dsm-btn__content {
      font-family: 'Roboto', -apple-system, sans-serif;
      letter-spacing: 1.08px;
      line-height: 20px;
      font-size: 14px;
      font-weight: bold;
    }
    .dsm-btn.dsm-btn--with-icon {
      padding: 10px 13px;
    }
    .dsm-btn:active {
      border: 1px solid rgba(72, 107, 255, 0.2);
      box-shadow: 0 0 36px 0 rgba(0, 0, 0, 0.2);
    }
    .dsm-btn:active:not(:disabled) {
      padding: 9px 39px;
    }
    .dsm-btn:active:not(:disabled).dsm-btn--with-icon {
      padding: 9px 12px;
    }
    .dsm-btn:hover {
      background-color: #3d5878;
      box-shadow: 0 8px 12px 0 rgba(0, 0, 0, 0.2);
    }
    .dsm-btn:hover:active {
      background-color: #5377a1;
    }
    .dsm-btn:disabled {
      cursor: not-allowed;
      background-color: rgba(128, 128, 128, 0.05) !important;
      color: #9e9e9e;
      box-shadow: none !important;
      border: none !important;
    }
    .dsm-btn:disabled svg {
      fill: #9e9e9e;
    }
  </style>
`;
