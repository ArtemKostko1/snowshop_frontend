const styles = {
  profileContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: '30px',
    width: '50%',
    margin: '0 auto',
  },
  sectionTitle: {
    fontSize: '24px',
    marginBottom: '15px',
    marginTop: '0',
  },
  divider: {
    border: 'none',
    borderTop: '1px solid #e0e0e0',
    margin: '20px 0',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    fontWeight: 500,
    marginBottom: '5px',
  },
  input: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '14px',
  },
  errorText: {
    color: '#e53935',
    fontSize: '12px',
    marginTop: '5px',
  },
  radioGroup: {
    display: 'flex',
    gap: '20px',
    marginTop: '5px',
  },
  radioLabel: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  },
  radioInput: {
    marginRight: '5px',
  },
  button: {
    backgroundColor: '#4a90e2',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  },
  buttonDisabled: {
    backgroundColor: '#cccccc',
    cursor: 'not-allowed',
  },
  loadingContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '200px',
    fontSize: '18px',
    color: '#757575',
  },
};

export default styles;
